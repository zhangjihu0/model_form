
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button, Form, Input } from 'antd';
const FormItem = Form.Item;
class Model_Alert extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.props.handleSubmit(e)
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    let {title} = this.props
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title={title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {
            this.props.children
          } 
        </Modal>
      </div>
    );
  }
}



class NormalAddForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form  onSubmit={this.props.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input placeholder="Username" />
            )}
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalAddForm = Form.create()(NormalAddForm);

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.jihu.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render(){
    return(
      <div>
        <Model_Alert 
          title={'first date'}
          handleSubmit={this.handleSubmit}
        >
          <WrappedNormalAddForm 
            handleSubmit={this.handleSubmit} 
            ref='jihu'
          />
        </Model_Alert>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('container'));
          