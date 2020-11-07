import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
    }
    #root{
        margin-top: 2rem;
    }

    .no-gutters {
        margin-right: 5px;
        margin-left: 5px;
    }
    .no-gutters>.col, .no-gutters>[class*=col-] {
    padding-right: 5px;
    padding-left: 5px;
}
`;
