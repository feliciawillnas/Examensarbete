import { createGlobalStyle } from 'styled-components';

// This is the global style for the app
// Here you can add any css that you want to be applied to the whole app

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
     transition: all 0.30s linear;
    .span {
         background: ${({ theme }) => theme.text};
    }
    .header-menu-border {
         border-bottom: 1px solid ${({ theme }) => theme.text};
    }
}
input {
    background: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
}
button {
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    
    &:hover {
       cursor: pointer;
    }
}
a {
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.textHover};
    }
    }
#desktop-nav a.active {

    background: ${({ theme }) => theme.tab};
    &:hover {
      /* Hover styling */
      background: ${({ theme }) => theme.buttonHover};
      cursor: pointer;
    }
}
footer {
    background: ${({ theme }) => theme.footer};
    transition: all 0.30s linear;
}
`;
