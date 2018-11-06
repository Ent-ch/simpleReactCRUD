import React from 'react';
import { FormGroup, InputGroup } from "@blueprintjs/core";
import axios from 'axios';
import { auth } from '../helpers.js';

export default class Login extends React.Component {
  handleAuth() {
    console.log('auth');
    axios('/v1/users/auth', {
        method: 'POST',
        data: {
          email: 'user1@email.com',
          password: '!password!',
        }
      })
      .then(function (response) {
        const { access_token } = response.data;
        console.log(response);
        auth(access_token);


        // axios.get('/v1/articles')
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
          
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    return <div>
      <FormGroup
        label="email"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-login" placeholder="Placeholder text" />
      </FormGroup>
      <FormGroup
        label="password"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-password" placeholder="Placeholder text" />
      </FormGroup>
    </div>;
  }
}
