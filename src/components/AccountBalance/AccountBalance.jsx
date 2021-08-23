import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
color: white;
font-size: 2rem;
text-align: center;
margin-bottom: 2rem;
display: inline-block;
`;

const Button = styled.button `
margin: 0 8px;
`;

const BalanceToggleButton = styled(Button)`
width 150px;
`;

const Balance = styled.div`
color white;
min-width 250px;
font-size 1.5em;
`;

var formater = Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
});

export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ? "Hide Balance" : "Show Balance";
    let content = `\u00A0`;
    if (props.showBalance) {
        content = <>{formater.format(props.amount)}</>
    }
    const buttonClass = (props.showBalance ? 'btn btn-warning' : 'btn btn-info');
   
    return (
        <>
            <Balance>{content}</Balance>
            <Section>
                <BalanceToggleButton 
                    onClick={props.handleBalanceVisibilityChange}
                    className={buttonClass}>
                    {buttonText}
                </BalanceToggleButton> 
                <Button className= "btn btn-success"
                        onClick={props.handleBrrrr}>
                                Money Button
                </Button>
            </Section>
        </>
    )
    
}





AccountBalance.propTypes = {
     amount: PropTypes.number.isRequired
    }