import styled from 'styled-components'

    function getBgColor({type, theme}) {
        console.log(theme);
        switch (type) {
            case "error":
                return theme.colors.error;
            case "warning":
                return theme.colors.warning
            case "success":
                return theme.colors.success   
        
            default:
                return theme.colors.grey;
        }
    };



export const AlertText = styled.p`
  line-height: 1.5;
  padding: 10px 20px;
  background-color: ${getBgColor};
  color: #fff;
`