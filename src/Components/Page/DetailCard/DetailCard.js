import React from 'react'
import styled from 'styled-components';

const DetailCard = () => {
  return (
    <div>
        <ContainerDetail>
            <Plantilla>
                  
            </Plantilla>
        </ContainerDetail>
      
    </div>
  )
}

const ContainerDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;
 
const Plantilla =  styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

export default DetailCard
