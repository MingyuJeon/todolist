import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
        padding : 0;
        margin : 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 96px auto 32px auto;
    display: flex;
    flex-direction: column;
`;

export const CircleButton = styled("button") <{ open: boolean }>`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    
    ${props => props.open && css`
        background: #ff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

export const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

export const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

export const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

export const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

export const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

export const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
        display: initial;
        }
    }
`;

export const CheckCircle = styled("div") <{ done: boolean }>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;

export const Text = styled("div") <{ done: boolean }>`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done && css`
        color: #ced4da;
        text-decoration: line-through;
    `}
`;

export const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;