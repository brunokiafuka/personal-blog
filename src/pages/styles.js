import styled from "styled-components"

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const PostCard = styled.article`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 25px;
  /* -webkit-box-shadow: 9px 9px 7px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 9px 7px -10px rgba(0, 0, 0, 0.75); */
  box-shadow: 0px 1px 2px rgba(46, 41, 51, 0.08),
    0px 2px 4px rgba(71, 63, 79, 0.08);
`
export const PostTitle = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  margin-bottom: 10px;
  color: #1f567a;
`
export const Date = styled.span`
  color: #999;
  font-size: 12px;
`
export const Tags = styled.span`
  background-color: #1f567a;
  color: #fff;
  font-size: 8px;
  padding: 5px;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;
`

export const Excerpt = styled.p`
  color: #999;
  font-size: 12px;
  margin-bottom: 5px;
  text-align: justify;
`
