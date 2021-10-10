import React, { useState } from 'react'
import './AddUserForm.scss'
import { Button, TextField } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

export enum Role {
    manager = 'Менеджер',
    dataScientist = 'Data Scientist',
    employee = 'Сотрудник'
}

interface Props {}

const AddUserForm: React.FC<Props> = props => {
    const [value, setValue] = useState('')
    return (
        <form className="add-user-form">
            <div className="add-user-form__title">Добавление пользователя</div>
            <TextField
                margin="normal"
                id="name"
                name="name"
                label="Имя Фамилия сотрудника"
                variant="outlined"
                fullWidth
            />
            <FormControl component="fieldset">
                <RadioGroup
                    defaultValue={Role.employee}
                    name="role"
                    className="add-user-form__radios"
                >
                    <FormControlLabel
                        value={Role.manager}
                        control={<Radio />}
                        label={Role.manager}
                    />
                    <FormControlLabel
                        value={Role.dataScientist}
                        control={<Radio />}
                        label={Role.dataScientist}
                    />
                    <FormControlLabel
                        value={Role.employee}
                        control={<Radio />}
                        label={Role.employee}
                    />
                </RadioGroup>
            </FormControl>
            <Button
                onClick={() => setValue('jksajf23dshsfsmslfmz9')}
                variant="contained"
                disableElevation
                fullWidth
                className="login-form__submit"
                size="large"
                style={{
                    borderRadius: '4px',
                    backgroundColor: '#F0F2F5',
                    padding: '18px 36px',
                    height: '48px',
                    color: '#626F84',
                    fontWeight: 'bold',
                    marginTop: '29px'
                }}
            >
                Регистрация
            </Button>
            <TextField
                margin="normal"
                id="token"
                name="token"
                variant="outlined"
                fullWidth
                value={value}
            />
        </form>
    )
}

export default AddUserForm
