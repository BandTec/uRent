import React from 'react';

import Footer from '../../components/Footer/index';
import Header from '../../components/HeaderInstitucional/index';

import image from '../../assets/guy-computer.svg';
import imagevalores from '../../assets/image-correct.svg';
import imageMap from '../../assets/map-app.png';
import teste from '../../assets/download.png';
import linkedin from '../../assets/logo-linkedin.png';

import * as S from './style';

function Institucional() {
   return (
      <div>
         <Header />
         <S.ContentPrincipal>
            <S.ContentMessage>
               <S.MessagePrinc>
               Nós somos a URENT!
               </S.MessagePrinc>
               <S.MessageSubMess>
               Uma plataforma de locação de garagens. 
               </S.MessageSubMess>
               <S.MessageSub>
               Queremos mudar a maneira de comos alugamos nossos carros, transformando o cotidiano em oportunidade!
               </S.MessageSub>
            </S.ContentMessage>
            <S.ContentMessageImage>
            <S.MessageImage src={image}></S.MessageImage>
            </S.ContentMessageImage>

         </S.ContentPrincipal>
         <S.ContentValores>
            <S.TitleValores>O que queremos?</S.TitleValores>
            <S.ContentAll>
            <S.BoxValores>
            <S.TitleValores>Missão</S.TitleValores>
            <S.TextBoxValores>
            Oferecer melhor mobilidade a nossos clientes com o conforto de uma garagem exclusiva sem preços abusivos.
            </S.TextBoxValores>
            <img src={imagevalores}></img >
            </S.BoxValores>
            <S.BoxValores>
            <S.TitleValores>Visão</S.TitleValores>
            <S.TextBoxValores>
            Temos como visão oferecer um produto de qualidade, com conforto e segurança para nossos clientes assim melhorando a facilidade na hora de estacionarem seus veículos e também melhorando o trânsito nas grandes cidades.
            </S.TextBoxValores>
            </S.BoxValores>
            <S.BoxValores>
            <S.TitleValores>Valores</S.TitleValores>
            <S.TextBoxValores>
            Prezamos muito a competência dos nossos serviços, não abrimos mão da segurança de nossos clientes e principalmente de seu conforto, uma empresa buscando humanizar e melhorar a mobilidade nas grandes cidades.
            </S.TextBoxValores>
            </S.BoxValores>
            </S.ContentAll>
         </S.ContentValores>

         <S.ContentPrincipal>
            <S.ContentBoxMessage style={{marginRight: "10%", marginTop: "45px"}}>
               <S.MessageBoxPrinc>
               Alugue e anuncie sua garagem conosco!
               </S.MessageBoxPrinc>
               <S.MessageBoxSubMess>
               Através da nossa plataforma garanta segurança, e tranquilidade na hora de alugar e anunciar. 
               </S.MessageBoxSubMess>
               <S.MessageBoxButton>
               <S.ButtonBuy>Quero participar!</S.ButtonBuy>
               </S.MessageBoxButton>
            </S.ContentBoxMessage>
            <S.ContentMessageImage  style={{marginRight: "10%", marginTop: "45px"}}>
            <S.MessageImage src={imageMap}></S.MessageImage>
            </S.ContentMessageImage>
         </S.ContentPrincipal>

         <S.ContentValores>
            <S.TitleValores>Conheça nosso time</S.TitleValores>
            <S.ContentAll>
               <S.BoxTeams>
                  <S.TeamCard>
                     <S.TeamCardPicture  src={teste}></S.TeamCardPicture>
                     <S.ContentTeamInfo>
                       <S.ContentBoxTeam>
                       <S.ContentTeamName>Enzo Miguel</S.ContentTeamName>
                        <S.ContentTeamFunc>Desenvolvedor Web</S.ContentTeamFunc>
                       </S.ContentBoxTeam>
                       <S.ContentBoxImg><S.TeamLinkedinImg src={linkedin}></S.TeamLinkedinImg></S.ContentBoxImg>
                     </S.ContentTeamInfo>
                  </S.TeamCard>

                  <S.TeamCard>
                     <S.TeamCardPicture  src={teste}></S.TeamCardPicture>
                     <S.ContentTeamInfo>
                       <S.ContentBoxTeam>
                       <S.ContentTeamName>Iago Luz</S.ContentTeamName>
                        <S.ContentTeamFunc>Project Manager</S.ContentTeamFunc>
                       </S.ContentBoxTeam>
                       <S.ContentBoxImg><S.TeamLinkedinImg src={linkedin}></S.TeamLinkedinImg></S.ContentBoxImg>
                     </S.ContentTeamInfo>
                  </S.TeamCard>

                  <S.TeamCard>
                     <S.TeamCardPicture  src={teste}></S.TeamCardPicture>
                     <S.ContentTeamInfo>
                       <S.ContentBoxTeam>
                       <S.ContentTeamName>Matheus Custódio</S.ContentTeamName>
                        <S.ContentTeamFunc>Desenvolvedor Back-end</S.ContentTeamFunc>
                       </S.ContentBoxTeam>
                       <S.ContentBoxImg><S.TeamLinkedinImg src={linkedin}></S.TeamLinkedinImg></S.ContentBoxImg>
                     </S.ContentTeamInfo>
                  </S.TeamCard>
                  
               </S.BoxTeams>

               <S.BoxTeams>
                  <S.TeamCard>
                     <S.TeamCardPicture  src={teste}></S.TeamCardPicture>
                     <S.ContentTeamInfo>
                       <S.ContentBoxTeam>
                       <S.ContentTeamName>Matheus Moreira</S.ContentTeamName>
                        <S.ContentTeamFunc>DBA</S.ContentTeamFunc>
                       </S.ContentBoxTeam>
                       <S.ContentBoxImg><S.TeamLinkedinImg src={linkedin}></S.TeamLinkedinImg></S.ContentBoxImg>
                     </S.ContentTeamInfo>
                  </S.TeamCard>

                  <S.TeamCard>
                     <S.TeamCardPicture  src={teste}></S.TeamCardPicture>
                     <S.ContentTeamInfo>
                       <S.ContentBoxTeam>
                       <S.ContentTeamName>Nikolly Santos</S.ContentTeamName>
                        <S.ContentTeamFunc>Desenvolvedora Back-end</S.ContentTeamFunc>
                       </S.ContentBoxTeam>
                       <S.ContentBoxImg><S.TeamLinkedinImg src={linkedin}></S.TeamLinkedinImg></S.ContentBoxImg>
                     </S.ContentTeamInfo>
                  </S.TeamCard>

                  <S.TeamCard>
                     <S.TeamCardPicture  src={teste}></S.TeamCardPicture>
                     <S.ContentTeamInfo>
                       <S.ContentBoxTeam>
                       <S.ContentTeamName>Vinicius Sobral</S.ContentTeamName>
                        <S.ContentTeamFunc>Desenvolvedor Back-end</S.ContentTeamFunc>
                       </S.ContentBoxTeam>
                       <S.ContentBoxImg><S.TeamLinkedinImg src={linkedin}></S.TeamLinkedinImg></S.ContentBoxImg>
                     </S.ContentTeamInfo>
                  </S.TeamCard>
                  
               </S.BoxTeams>
               
            </S.ContentAll>
         </S.ContentValores>
         
         <Footer/>
      </div>
   )
}

export default Institucional;