import styled from "styled-components"

export const Container = styled.div`
  /* display: flex;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center; */
`

export const PostTitle = styled.h4`
  font-family: Poppins;
  font-size: 24px;
  margin-bottom: 15px;
  color: #1f567a;
`

export const Divider = styled.hr`
  background-color: #ccc;
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
export const Date = styled.span`
  color: #999;
  font-size: 12px;
`

export const PostsNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-left: 0;
  li > a {
    color: #1f567a;
    text-decoration: none;
    font-weight: bold;
    font-family: Poppins;
  }
`
