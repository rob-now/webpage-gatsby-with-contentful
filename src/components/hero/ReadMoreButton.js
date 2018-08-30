import React from 'react'
import styled from 'styled-components'

const StyledReadMoreButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`

const StyledReadMoreText = styled.span`
  width: 135px;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  background: #1b2936;
  color: #fff;
  transition: background 0.3s;

  ${({ hovered }) =>
    hovered &&
    `
      background: #006db7;
      transition: background 0.3s;
    `};
`

const StyledReadMoreArrow = styled.span`
  width: 30px;
  height: 34px;
  line-height: 31px;
  background: #2f3840;
  transition: background 0.3s;

  ${({ hovered }) =>
    hovered &&
    `
      background: #037ed1;
      transition: background 0.3s;
    `};
`

export default ({ id, text, isReadMoreButtonHovered, handlePointerHover }) => {
  return (
    <StyledReadMoreButton
      type="button"
      onPointerEnter={() => handlePointerHover(id)}
      onPointerLeave={() => handlePointerHover(id)}
    >
      <StyledReadMoreText hovered={isReadMoreButtonHovered[id]}>
        {text}
      </StyledReadMoreText>
      <StyledReadMoreArrow hovered={isReadMoreButtonHovered[id]}>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="angle-right"
          width="6px"
          height="9px"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="#fff"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </svg>
      </StyledReadMoreArrow>
    </StyledReadMoreButton>
  )
}
