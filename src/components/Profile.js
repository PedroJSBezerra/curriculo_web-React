import styled from 'styled-components'

import phone from '../icons/phone.svg'
import mail from '../icons/mail.svg'
import github from '../icons/github.svg'
import linkedin from '../icons/linkedin.svg'
import mappin from '../icons/map-pin.svg'

import imgprofile from '../images/profile.png'

const Profile = () => {
    return (
        <Styled>
            <img className="profileimg" src={imgprofile} alt="Foto do Perfil"></img>
            <h3>MEUS CONTATOS</h3>
            <ul>
                <li>
                    <img src={phone} alt="" />
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=+5585991249590">(85) 99124 9590</a>
                        <a href="https://api.whatsapp.com/send?phone=+5585991095608">(85) 99109 5608</a>
                    </div>
                </li>
                <li>
                    <img src={mail} alt="icone de email"/>
                    <div>
                        <a href="mailto:pjsoares46@gmail.com">pjsoares46@gmail.com</a>
                    </div>
                </li>
                <li>
                    <img src={github} alt="icone do github"/>
                    <div>
                        <a href="https://github.com/PedroJSBezerra">@PedroJSBezerra</a>
                    </div>
                </li>
                <li>
                    <img src={linkedin} alt="icone do linkedin"/>
                    <div>
                        <a href="https://www.linkedin.com/in/pedrojsbezerra/">@pedrojsbezerra</a>
                    </div>
                </li>
                <li>
                    <img src={mappin} alt="icone de localização"/>
                    <div>
                        <a href="https://www.google.com.br/maps/@-4.1779003,-38.5335078,12z">Pacajus, Ceará, Brasil</a>
                    </div>
                </li>
            </ul>            
        </Styled>
    )
}

const Styled = styled.div`
    font-size: 1.4rem;
    color: white;
    
    width: 95vw;
    margin-top: 2%;
    padding: 4%;
    border-radius: 10px;
    background-color: #777;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    .profileimg{
        width: 40%;
    }
    h3{
        margin: 4% 0;
        width: 100%;
        text-align: center;
    }

    ul {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        li {
            width: 100%;
            list-style-type: none;

            display: flex;
            align-items: flex-start;
            img {
                width: 2rem;
                position: relative;
                margin: 2% 4% 0 0;
            }
            div {
                width: 100%;
                display: flex;
                flex-direction: column;
                a {
                    padding-left: 4%;
                    color: white;
                    text-decoration: none;
                    word-break: break-word;
                    line-height: 2.6rem;
                    :hover{
                        background: rgba(0,0,0,.2);
                        border-radius: 10px;
                    }
                }
            }
        }
        
    }
    
    
`
export default Profile