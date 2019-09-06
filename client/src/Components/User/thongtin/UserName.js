import React, { Component } from 'react'

export class UserName extends Component {
    render() {
        const{user}=this.props;
        return (
            <div class="d-flex">
            <i class="fas fa-user-tie fa-5x"></i>
                <div id="pro-1">
                    <h3>Thông tin cá nhân</h3>
                    <strong>Email:<span>{user.email}</span></strong>
                </div>
            </div>
        )
    }
}

export default UserName
