'use strict'

import React from 'react'

const Title = ({ name, lastname}) => (
  <h1>Olá, {`${name} ${lastname}`}</h1>
)

  Title.defaultProps = {
    name: 'Anonimo',
    lastname: 'Sem sobrenome'
}



// const Title = React.createClass({

//   getDefaultProps: () => {
//     return {
//       name: 'Anonimo',
//       lastname: 'Sem sobrenome'
//     }
//   },

//   render: function () {
//     return (
//       <h1>Olá, {`${this.props.name} ${this.props.lastname}`}!</h1>
//     )
//   }
// })

export default Title
