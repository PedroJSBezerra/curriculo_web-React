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
            <img src={imgprofile} alt="Foto do Perfil"></img>
            <h3>MEUS CONTATOS</h3>
            <ul>
                <li>
                    <img src={phone} alt="" />
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=+5585991249590">(85) 99124 9590</a>
                    </div>
                </li>
                <li>
                    <img src={phone} alt="ddd 85 991095608"/>
                    <div>
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
    
    color: white;
    
    padding: 2%;
    border-radius: 10px;
    background-color: #777;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    ul {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
        li {
            width: 100%;
            padding: 2%;
            list-style-type: none;

            display: flex;
            flex-wrap: nowrap;
            img {
                position: relative;
                top: 2px;
                margin: 0 2% 0 0;
            }
            div {
                display: flex;
                flex-direction: column;
                
                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
        
    }
    
    
`
export default Profile