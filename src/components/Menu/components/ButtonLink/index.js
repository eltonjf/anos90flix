import React from 'react'

function ButtonLink (props) {
//props => { classname: "o que alguém passar", href: "/"}

//Por padrão props pega o nome da tag como props.children

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}

export default ButtonLink