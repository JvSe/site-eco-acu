import React, { useState } from 'react';
import styles from '../styles/pages/Portfolio.module.scss';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import { useSelector } from 'react-redux';

import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

import img1 from '../assets/img/1.jpeg';
import img2 from '../assets/img/2.jpeg';
import img3 from '../assets/img/3.jpeg';

import { 
    FaCheck, 
    FaWarehouse, 
    FaHandHoldingUsd, 
    FaShoppingCart,
    FaCalculator,
    FaCar,
    FaGavel,
    FaChartLine,
    FaLandmark,
    FaSearchDollar,
    FaCopy,
    FaUserFriends,

} from 'react-icons/fa';

import { IoIosGlobe } from "react-icons/io";

const listIcons = [
    {
        name: 'Almoxarifado', 
        icon: <FaWarehouse size={'3rem'}/>,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Arrecadação', 
        icon: <FaHandHoldingUsd size={'3rem'} />,
        description: `
            Permite a gestão das Taxas e  Impostos municipais, efetuando 
            cálculos automáticos de acordo com o código tributário vigente 
            no município. Possui opções de acesso público aos contribuintes 
            para consulta de débitos no município, dentre outras funcionalidades. 

            <br />
            <br />

            <strong> Nota Fiscal Eletrônica:</strong>  Permite a Gestão e fiscalização do ISS 
            do município, a partir da emissão de Notas Fiscais Eletrônicas. O 
            módulo permite que o próprio contribuinte possa realizar a emissão 
            da Nota Eletrônica e o sistema realiza o cálculo automático dos impostos 
            de acordo com a alíquota do serviço selecionado.
        
        `,
        listVantagens: [
            {title:'Emissão de Taxas', iconTam:'15px'},
            {title:'Lançamento de IPTU, ITBI e outros', iconTam:'15px'},
            {title:'Consulta de débitos geral e por contribuinte', iconTam:'15px'},
            {title:'REFIS', iconTam:'15px'},
            {title:'Emissão de Nota Eletrônica e Avulsa', iconTam:'15px'},
            {title:'Emissão de Guias de Taxas e Impostos', iconTam:'15px'},
            {title:'Relatórios de Gestão', iconTam:'15px'}

        ]
    },
    {
        name: 'Compras', 
        icon: <FaShoppingCart size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Contábil', 
        icon: <FaCalculator size={'3rem'} />,
        description: `
            O sistema de contabilidade foi desenvolvido para atender as 
            necessidades dos usuários das entidades Públicas Municipais, 
            facilitando o seu dia a dia. Todas as telas foram criadas 
            utilizando uma linguagem simples e de fácil aprendizado 
            permitindo uma maior facilidade na operacionalização do sistema
        `,
        listVantagens: [
            {title:'Suporte técnico eficiente', iconTam:'15px'},
            {title:'Módulo Web sem limite de usuários', iconTam:'15px'},
            {title:'Integração com os módulos de Orçamento, Portal da Transparência RH, Arrecadação, Protocolo, dentre outros', iconTam:'25px'},
            {title:'Layouts atualizados de acordo com as legislações vigentes', iconTam:'15px'},
            {title:'Relatórios gerencias desenvolvidos de acordo com a necessidade do cliente', iconTam:'17px'},
            {title:'Filtros diversos para consulta de dados', iconTam:'15px'},
            {title:'Exportação de arquivos para Prestação de Contas', iconTam:'15px'}
        ]
    },
    {
        name: 'Frotas', 
        icon: <FaCar size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Licitação', 
        icon: <FaGavel size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Orçamentário', 
        icon: <FaChartLine size={'3rem'} />,
        description: `
            Permite a gestão e o planejamento do orçamento público, bom como 
            o gerenciamento de Programas, Ações, Receitas e Despesas Públicas. 
            Possui integração completa com o módulo de Contabilidade e Compras 
            permitindo um maior controle nas gestão dos recursos municipais.

        `,
        listVantagens: [
            {title:'Cadastro do PPA, LDO e LOA', iconTam:'15px'},
            {title:'Lançamento do PPA, Orçamento da Receita e Despesa', iconTam:'15px'},
            {title:'Anexos do PPA, Lei 4.320, LRF dentre outros', iconTam:'15px'}
        ]
    },
    {
        name: 'Patrimônio', 
        icon: <FaLandmark size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Portal da Transparência', 
        icon: <FaSearchDollar size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Protocolo', 
        icon: <FaCopy size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Recursos Humanos', 
        icon: <FaUserFriends size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
    {
        name: 'Serviços de acesso pelo Cidadão via Internet', 
        icon: <IoIosGlobe size={'3rem'} />,
        description: `
            [DESCRIÇÃO]
        `,
        listVantagens: [
            {title:'VATAGEM 1', iconTam:'15px'},
            {title:'VATAGEM 2', iconTam:'15px'},
            {title:'VATAGEM 3', iconTam:'15px'},
            {title:'VATAGEM 4', iconTam:'15px'},
        ]
    },
]

const ContainerInfosProd = props => (
    
        <div 
            key={props.index}
            
      
        >
            <div 
                style={{
                    display: 'flex',
                    alignItems:'center', 
                    justifyContent:'space-around',
                    flexDirection:'column'
                }}
            >
                <h1 style={{marginBottom:'1.5rem', color: '#2d3a6a',}}> {props.icons.name} </h1>

                <p 
                    id="textDescript" 
                    style={{
                        width:'70%', 
                        marginTop:'1rem', 
                        textAlign:'justify', 
                        fontSize:'1.6rem', 
                        color: '#2d3a6a',
                        }} 
                        dangerouslySetInnerHTML={{__html:props.icons.description}}
                    />

                <h3 style={{marginTop:'2rem', fontSize:'1.6rem', marginBottom:'2.5rem', color: '#2d3a6a',}}> Vantagens do módulo </h3>

                <div style={{
                    display: 'grid',
                    gridGap:'1rem',
                    width:'50%',
                    color: '#2d3a6a',

                }}>
                    {props.icons.listVantagens.map(vantagem => (
                        <span className={styles.containerVantagens}> <FaCheck size={vantagem.iconTam} /> <p> {vantagem.title} </p>  </span> 
                    ))}
                    
                </div>
            </div>
        </div>
    
)

export default function Portfolio() {

    const [infoPort, setPort] = useState(0);

    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;


    return(
        <div className={styles.container}>
            <div className={styles.containerRectangle}>
                <Rectangle 
                    cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
                    width={window.screen.availWidth < 560 ? false :'45%'}
                    left={false}
                    height='80%' 
                    pos={{'right':'-20px', 'position':'absolute'}}
                >
                    <div className={styles.containerRectangleTwo}>
                        <div className={styles.textTitle}>
                            <TextTitle color={{'gradient':true, 'colorStart':themeText.colorStart, 'colorEnd':themeText.colorEnd}}>Portfólio</TextTitle>
                        </div>

                    </div>
                    
                </Rectangle>
            </div>
            <Rectangle 
                width={window.screen.availWidth < 560 ? false : '60%'}
                height={window.screen.availWidth < 560 ? '50%' : '70%'}
                left={true}
                cor={'#fff'}
                pos={{'left':'0px', 'position':'absolute'}}
                style={{overflow:'hidden'}}
            >
                
                <AwesomeSlider 
                    style={{
                        flex: 10,
                    }}
                    mobileTouch={true}
                    selected={infoPort}
                >
                    {listIcons.map((icons, index) => (
                        <div key={index}>
                            <ContainerInfosProd icons={icons} index={index} />
                        </div>
                    ))}
                </AwesomeSlider>

                <div style={{
                    display: 'flex',
                    flex:1,
                    alignItems:'flex-end',
                    justifyContent:'space-around',
                    flexDirection:'column',
                    width: '100%',
                    height: '100%',
                    transition: 'ease-in-out'
                    
                }}>
                    {listIcons.map((icons, index) => (
                        <div 
                            key={index}
                            onClick={() => setPort(index)}
                            style={{
                                backgroundColor: theme.type === 'gestao' ? infoPort === index ? '#fff' : '#D8A72C' : infoPort === index ? '#fff' : '#2d3a6a', 
                                width:'100%', 
                                height:'100%', 
                                display:'flex', 
                                alignItems:'center', 
                                justifyContent:'center',
                                color: theme.type === 'gestao' ? infoPort === index ? '#2d3a6a': '#fff' : infoPort === index ? '#D8A72C': '#fff',
                                cursor: 'pointer'
                            }}>
                            
                            {icons.icon}
                        </div>
                    ))}
                </div>
                
            </Rectangle>
        </div>
    )
}

/**
 *  <div className={styles.gridPort}>
        {listImgs.map((imgs, index) => (
            <a href="#portifolio">
                <img src={imgs} alt="imgs"/>
            </a>
        ))}
    </div>

    {listIcons.map((icons, index) => (
                        <ContainerInfosProd icons={icons} index={index} />
                    ))}
 */