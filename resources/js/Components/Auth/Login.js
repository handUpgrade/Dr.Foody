import React, { Component } from 'react';
import {InputWithLabel} from './InputWithLabel';
import AuthContent from './AuthContent';
import AuthButton from './AuthButton';
import AuthLink from './AuthLink';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            password: "",
            nickname: "",
            error: null
        };
    }
    updateInform = e => {
        // e.preventDefault();
        const { target : {name, value}} = e;
        const  {id ,password} = this.state;
        const set = {
            id ,password
        };
        for(var key in set){
            if(key === name){
                set[key] = value;
                switch(key){
                    case "id":
                        this.setState({
                            id: set[key]
                        });
                        break;
                    case "password":
                        this.setState({
                            password: set[key]
                        });
                        break;
                    default:
                        console.log('error');
                }
            }
        }
        console.log(name+" : "+value);
    };

    // 세션 등록
    signUp = () => {
        const { id, nickname} = this.state;
        
        window.sessionStorage.setItem('id', id);
        window.sessionStorage.setItem('nickname', nickname);
        this.props.onLogin;
        this.props.history.push('/');
    }

    // 로그인 버튼
    handleLoginButton = e => {
        e.preventDefault();
        const {id, password } = this.state;

        axios.post('api/login', {
            id,
            // id : id
            password
            // password: password
        })
        .then( response => {
            if(response.data.access_token){
                this.signUp();
            }
            console.log(response);
        }) 
        .catch( error => {
            console.log(error);
        });
    };

    componentDidMount(){
        const pr = 123;
        axios.get(`api/searchProduct/`, {
            params : {
                id: '111'
            }
        })
        .then( res => {
            console.log(res);
        })
        .catch( error => {
            console.log(error);
        });
    }

    render() {
        return (
            <AuthContent title="로그인">
                <InputWithLabel label="아이디" name="id" placeholder="아이디" onChange={this.updateInform}/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={this.updateInform}/>
                <AuthButton onClick={this.handleLoginButton}>로그인</AuthButton>
                <AuthLink to='/regist' children='회원가입'></AuthLink>
                {/* modify: /auth/register */}
            </AuthContent>
        );
    }
}

export default withRouter(Login);