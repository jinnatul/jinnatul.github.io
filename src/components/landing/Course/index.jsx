import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { Container, Card } from "../../common";
import { Wrapper, Grid, Item, Content } from "./styles";
import { Courses } from "../../../data/cources";

export const Course = () => {
  return (
    <Wrapper as={Container} id="courses">
      <h2>Courses</h2>
      <Grid>
        {Courses.map(({ id, name, image }) => (
          <Item key={id} rel="noopener noreferrer" theme={"light"}>
            <Card theme={"light"}>
              <Link to={`/courses/${id}`}>
                <Content>
                  <h4>{name}</h4>
                  <Image height={300} preview={false} src={image} />
                </Content>
              </Link>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
