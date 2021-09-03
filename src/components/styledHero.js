import styled from 'styled-components'
import deafultimg from '../images/room-1.jpeg'
const styelHero=styled.header`

min-height:  60vh;
background: url(${props=>props.img?props.img:deafultimg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;

`
export default styelHero