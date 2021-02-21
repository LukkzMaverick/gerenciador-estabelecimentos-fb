import styled from 'styled-components';

const StyledDiv = styled.div`
  .login{
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login__title{
    margin-bottom: 2rem;
}
.login__input, .alertError{
    padding: 0.5em;
    margin-top: 0.2em;
    margin-bottom: 1em;
    border-radius: 7px;
    width: 100%;
    max-width: 600px;
}
.login__label{
    width: 100%;
    max-width: 600px;
}
.login__button{
    margin-top: 1em;
    color: white;
    background-color: var(--primary-color);
    padding: 0.5em;
    width:60%;
    max-width: 300px;
    border-radius: 5px;
    align-self: center;
    font-size: 1.2rem;
}
.login__button:hover{
    background-color:var(--primary-hover);
}

`

export default StyledDiv