import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Radio, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select
            style={{
                width: 70,
            }}
        >
            <Option value="1">+1</Option>
            <Option value="7">+7</Option>
            <Option value="20">+20</Option>
            <Option value="27">+27</Option>
            <Option value="30">+30</Option>
            <Option value="31">+31</Option>
            <Option value="32">+32</Option>
            <Option value="34">+34</Option>
            <Option value="36">+36</Option>
            <Option value="39">+39</Option>
            <Option value="40">+40</Option>
            <Option value="41">+41</Option>
            <Option value="43">+43</Option>
            <Option value="44">+44</Option>
            <Option value="45">+45</Option>
            <Option value="46">+46</Option>
            <Option value="47">+47</Option>
            <Option value="48">+48</Option>
            <Option value="49">+49</Option>
            <Option value="51">+51</Option>
            <Option value="52">+52</Option>
            <Option value="54">+54</Option>
            <Option value="55">+55</Option>
            <Option value="56">+56</Option>
            <Option value="57">+57</Option>
            <Option value="60">+60</Option>
            <Option value="61">+61</Option>
            <Option value="62">+62</Option>
            <Option value="63">+63</Option>
            <Option value="64">+64</Option>
            <Option value="65">+65</Option>
            <Option value="66">+66</Option>
            <Option value="81">+81</Option>
            <Option value="82">+82</Option>
            <Option value="84">+84</Option>
            <Option value="86">+86</Option>
            <Option value="90">+90</Option>
            <Option value="91">+91</Option>
            <Option value="92">+92</Option>
            <Option value="94">+94</Option>
            <Option value="98">+98</Option>
            <Option value="212">+212</Option>
            <Option value="213">+213</Option>
            <Option value="234">+234</Option>
            <Option value="254">+254</Option>
            <Option value="255">+255</Option>
            <Option value="351">+351</Option>
            <Option value="352">+352</Option>
            <Option value="353">+353</Option>
            <Option value="354">+354</Option>
            <Option value="356">+356</Option>
            <Option value="358">+358</Option>
            <Option value="377">+377</Option>
            <Option value="502">+502</Option>
            <Option value="503">+503</Option>
            <Option value="504">+504</Option>
            <Option value="506">+506</Option>
            <Option value="507">+507</Option>
            <Option value="593">+593</Option>
            <Option value="598">+598</Option>
            <Option value="675">+675</Option>
            <Option value="677">+677</Option>
            <Option value="679">+679</Option>
            <Option value="680">+680</Option>
            <Option value="852">+852</Option>
            <Option value="853">+853</Option>
            <Option value="886">+886</Option>
            <Option value="960">+960</Option>
            <Option value="964">+964</Option>
            <Option value="965">+965</Option>
            <Option value="966">+966</Option>
            <Option value="972">+972</Option>
            <Option value="977">+977</Option>
            <Option value="1671">+1671</Option>
            <Option value="1809">+1809</Option>
        </Select>
    </Form.Item>
);



export default class Sign extends Component {
    state = {
        value: 1,
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        return (
            <Form
                name="register"
                scrollToFirstError
            >
                <Form.Item
                    name="Last_name"
                    label="Last Name/姓氏"
                    rules={[
                        {
                            type: 'Last_name',
                            message: '您輸入的姓氏無效',
                        },
                        {
                            required: true,
                            message: '請您輸入正確姓氏',
                        },
                    ]}
                >
                    <Input
                        minLength={3}
                        maxLength={5}
                        defaultValue="例如:王"
                    />
                </Form.Item>
                <Form.Item
                    name="First_name"
                    label="First Name/名字"
                    rules={[
                        {
                            type: 'First_name',
                            message: '您輸入的名字無效',
                        },
                        {
                            required: true,
                            message: '請您輸入正確名字',
                        },
                    ]}
                >
                    <Input
                        minLength={1}
                        maxLength={5}
                        defaultValue="例如:小明"
                    />
                </Form.Item>
                <Form.Item
                    name="Password"
                    label="Password/密碼"
                    rules={[
                        {
                            required: true,
                            message: '請輸入您的密碼!*密碼內必須要有字母',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        minLength={6}
                        maxLength={15}
                    />
                </Form.Item>
                <Form.Item
                    name="Confirm"
                    label="Confirm Password/確認密碼"
                    dependencies={['Password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('Password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('您輸入的密碼與前一次不匹配，請重新輸入');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="Email"
                    label="E-mail/電子郵件"
                    rules={[
                        {
                            type: 'email',
                            message: '您輸入的E-mail格式不正確，請重新輸入!',
                        },
                        {
                            required: true,
                            message: '請輸入您的E-mail!',
                        },
                    ]}
                >   
                    <Input
                        type="email"
                        defaultValue="例如:123@gmail.com"
                    />
                </Form.Item>
                <Form.Item
                    name="Gender"
                    label="Gender/性別"
                    rules={[
                        {
                            required: true,
                            message: '請選取一個選項',
                        },
                    ]}
                    
                >
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={0}>male/男</Radio>
                        <Radio value={1}>female/女</Radio>
                        <Radio value={2}>other/其他</Radio>
                    </Radio.Group>  
                </Form.Item>
                <Form.Item
                    name="Phone"
                    label="Phone Number/電話號碼"
                    rules={[
                        {
                            required: true,
                            message: '請輸入您的電話號碼!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        maxLength={11}
                        minLength={10}
                        type="tel"
                    />
                </Form.Item>
               
                <Form.Item
                    name="Bank"
                    label="Account/彩金接收帳戶"
                >

                </Form.Item>
            </Form>
        )
    }
}