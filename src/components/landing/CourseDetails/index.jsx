import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Image, Modal } from "antd";
import { useParams } from "react-router-dom";
import { Container, Card } from "../../common";
import { Wrapper, Grid, Item, Content } from "./styles";
import { Courses, Videos } from "../../../data/cources";
import './styles.css'

export const CourseDetails = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const CourseInfo = Courses[+id - 1];
  const VideoInfo = Videos.filter((el) => el.course === +id);

  const showModal = (name, url) => {
    if (url) {
      setVideoName(name);
      setVideoLink(url);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const cancelModal = () => {
    setVideoName("");
    setVideoLink("");
    setIsVisible(false);
  };

  return (
    <Wrapper as={Container} id={`courses-${id}`}>
      {VideoInfo.length ? (
        <>
          <h2>Course: {CourseInfo.name}</h2>
          <Grid>
            {VideoInfo.map(({ id, name, url, image }) => (
              <Item key={id} rel="noopener noreferrer" theme={"light"}>
                <Card theme={"light"} onClick={() => showModal(name, url)}>
                  <Content>
                    <Image height={300} preview={false} src={image} />
                  </Content>
                </Card>
              </Item>
            ))}
          </Grid>
          <Modal title={videoName} visible={isVisible} footer={null} onCancel={cancelModal}>
            <ReactPlayer width={"100%"} height={"100%"} url={videoLink} />
          </Modal>
        </>
      ) : (
        <h2>New Course Coming Soon!</h2>
      )}
    </Wrapper>
  );
};
