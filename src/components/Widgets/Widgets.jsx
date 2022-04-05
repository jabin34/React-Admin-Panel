import React from 'react';
import './Widgets.scss';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Widgets = ({type}) => {

    let data;
    const amount = 100;
    const diff = 20;
    switch(type){
        case "user":
            data ={
                title:'Users',
                isMoney:false,
                link:"see all users",
                icon:<PersonOutlineIcon className='icon' 
                style={{ 
                    color:'crimson',
                    backgroundColor:'rgba(255,0,0,0.2)'
                }}/>,
            };
            break;
            case "order":
                data ={
                    title:'Order',
                    isMoney:false,
                    link:"see all order",
                    icon:<ShoppingCartOutlined className='icon'
                    style={{ 
                        color:'goldenrod',
                        backgroundColor:'rgba(218,165,32,0.2)'
                    }}
                    />,
                };
                break;
                case "earning":
                    data ={
                        title:'Earning',
                        isMoney:true,
                        link:"see all earning",
                        icon:<MonetizationOnOutlined className='icon'
                        style={{ 
                            color:'green',
                            backgroundColor:'rgba(0,128,0,0.2)'
                        }}/>,
                    };
                    break; 
                    case "balance":
                        data ={
                            title:'Balance',
                            isMoney:true,
                            link:"see all balance",
                            icon:<AccountBalanceWalletOutlined className='icon'
                            style={{ 
                                color:'purple',
                                backgroundColor:'rgba(128,0,128,0.2)'
                            }}
                            />,
                        };
                        break;         
            default:
                break;
    };

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney&&"$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
               <KeyboardControlKeyOutlinedIcon />
                    {diff}%
                </div>
              {data.icon}
            </div>
        </div>
    );
};

export default Widgets;