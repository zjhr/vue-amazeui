<template>
    <vueview>
        <navbar slot="header" blue>
            Form
            <icon name="left-nav" slot="left" titleRight="返回" back></icon>
        </navbar>
        <div class="sk-demos">
            <group header="基本样式">
                <field label="Your Name">
                    <field-input placeholder="What's your name."></field-input>
                </field>
                <field label="Password">
                    <field-input type="password" placeholder="Yout password."></field-input>
                </field>
                <field label="Age">
                    <field-input type="number" placeholder="Your age."></field-input>
                </field>
                <field label="Select">
                    <field-input value="m" type="select">
                        <option selected value="m">Male</option>
                        <option value="f">Female</option>
                    </field-input>
                </field>
                <field label="Range">
                    <field-input type="range" value="10"></field-input>
                </field>
                <field label="Commnet">
                    <field-input type="textarea" placeholder="Say something you whant."></field-input>
                </field>
                <vue-button sblue block>提交</vue-button>
            </group>
            <group header="Form Set">
                <form-group set>
                    <field-input placeholder="Name"></field-input>
                    <field-input type="email" placeholder="Email"></field-input>
                    <field-input type="password" placeholder="Password"></field-input>
                </form-group>
                <vue-button blue block>提交</vue-button>
            </group>
            <group header="Field Group">
                <form-group labelBefore="www." labelAfter=".com">
                    <field-input placeholder="You domain."></field-input>
                </form-group>
                <form-group>
                    <icon slot="left" name="person"></icon>
                    <field-input type="email" placeholder="You email."></field-input>
                    <vue-button slot="btnAfter">Subscribe</vue-button>
                </form-group>
                <form-group>
                    <icon slot="left" name="search"></icon>
                    <field-input type="search" placeholder="Keywords..."></field-input>
                    <vue-button slot="btnAfter">Search</vue-button>
                </form-group>
            </group>
            <h2>Form in List</h2>
            <group noPadded header="Fields List">
                <list>
                    <list-item nested="input">
                        <field-input placeholder="Username..."></field-input>
                    </list-item>
                    <list-item nested="input">
                        <field-input type="password" placeholder="Password..."></field-input>
                    </list-item>
                    <list-item nested="input">
                        <field-input type="date" placeholder="Birth date..."></field-input>
                    </list-item>
                </list>
            </group>
            <group noPadded header="With Label">
                <list>
                    <list-item nested="input">
                        <field label="Username">
                            <field-input placeholder="Username..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input">
                        <field label="Password">
                            <field-input type="password" placeholder="Password..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input">
                        <field label="Birth date">
                            <field-input type="date" placeholder="Birth date..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input" title="Switch">
                        <vue-switch slot="after"></vue-switch>
                    </list-item>
                </list>
            </group>
            <group noPadded header="List with Icon">
                <list>
                    <list-item nested="input">
                        <icon slot="img" name="person"></icon>
                        <field>
                            <field-input placeholder="Username..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input">
                        <icon slot="img" name="info"></icon>
                        <field>
                            <field-input type="password" placeholder="Password..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input">
                        <icon slot="img" name="refresh"></icon>
                        <field>
                            <field-input type="date" placeholder="Birth date..."></field-input>
                        </field>
                    </list-item>
                </list>
            </group>
            <group noPadded header="List with Label & Icon">
                <list>
                    <list-item nested="input">
                        <icon slot="img" name="person"></icon>
                        <field label="Username">
                            <field-input placeholder="Username..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input">
                        <icon slot="img" name="info"></icon>
                        <field label="Password">
                            <field-input type="password" placeholder="Password..."></field-input>
                        </field>
                    </list-item>
                    <list-item nested="input">
                        <icon slot="img" name="refresh"></icon>
                        <field label="Birth date">
                            <field-input type="date" placeholder="Birth date..."></field-input>
                        </field>
                    </list-item>
                </list>
            </group>
            <h3>Checkboxes &amp; Radios</h3>
            <group noPadded header="Checkboxes" footer="点击列表选择">
                <list>
                    <list-item nested="checkbox">
                        <field label="iPhone 6" check>
                            <field-input name="checkbox-list-1" type="checkbox"></field-input>
                        </field>
                    </list-item>
                    <list-item nested="checkbox">
                        <field label="MacBook Pro Retina" check>
                            <field-input name="checkbox-list-1" type="checkbox"></field-input>
                        </field>
                    </list-item>
                    <list-item nested="checkbox">
                        <field label="iMac 5K" check>
                            <field-input name="checkbox-list-1" type="checkbox"></field-input>
                        </field>
                    </list-item>
                </list>
            </group>
            <group noPadded header="Radios" footer="点击选择一项">
                <list>
                    <list-item nested="radio">
                        <field label="iPhone 6" check>
                            <field-input name="radio-list-1" type="radio"></field-input>
                        </field>
                    </list-item>
                    <list-item nested="radio">
                        <field label="MacBook Pro Retina" check>
                            <field-input name="radio-list-1" type="radio"></field-input>
                        </field>
                    </list-item>
                    <list-item nested="radio">
                        <field label="iMac 5K" check>
                            <field-input name="radio-list-1" type="radio"></field-input>
                        </field>
                    </list-item>
                </list>
            </group>
        </div>
    </vueview>
</template>

<script>
    import Index from './index.js';
    import vueSwitch from 'components/vueSwitch';
    import * as vueform from 'components/form';
    import * as Button from 'components/button';
    import * as List from 'components/list';
    export default {
        components: {
            vueSwitch,
            ...Index,
            ...vueform,
            ...Button,
            ...List
        }

    }
</script>

<style scoped>

</style>