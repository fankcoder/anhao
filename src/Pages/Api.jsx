export var access_token = ""
const host = "http://192.168.3.13:8000/api/"
// export const ws = "ws://192.168.3.13:4000"
// const host = "https://xijiayi.store/api/"
// export const ws = "wss://xijiayi.store:443/socket.io/"
export var userInfo = {
    "username": "未登录",
    "photo": require('../assets/avatar.png'),
    "extra": {
        "coin": 0,
        "gpt": 0
    },
    "invite": {
        "anhao": ""
    }
}


// auth send_code
export const send_code = async (phone) => {
    const url = `${host}auth/send_code/?phone=${phone}`

    try {
        const response = await( await fetch(url)).json()
        console.log(response)
        if (response.code === 200) {
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

// auth login
export const login = async (phone, code, anhao) => {
    const url = `${host}auth/login/?phone=${phone}`
    console.log(url)
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone: phone,
                code: code,
                anhao: anhao
            }),
        })).json()
        // console.log(response)
        if (response.code === 200) {
            access_token = response.body.access
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//auth info
export const get_user_info = async () => {
    const access_token = localStorage.getItem('authToken');
    const url = `${host}auth/user_info/`
    const headers = {"Authorization": `Bearer ${access_token}`}
    try {
        const response = await( await fetch(url, {headers:headers})).json()
        // console.log(response)
        if (response.code === 200) {
            console.log(response)
            userInfo.username = response.body.username
            if (response.body.photo != null) {
                userInfo.photo = response.body.photo
            }
            userInfo.extra.coin = response.body.extra.coin
            userInfo.extra.gpt = response.body.extra.gpt
            userInfo.invite.anhao = response.body.invite.anhao
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//auth upload info
export const upload_info = async (nickname) => {
    const url = `${host}auth/upload_info/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                nickname: nickname,
            })
        })).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            userInfo.username = nickname
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//auth/get_coin/
export const getCoin = async() => {
    const url = `${host}auth/get_coin/`
    const headers = {"Authorization": `Bearer ${access_token}`}
    try {
        const response = await( await fetch(url, {headers:headers})).json()
        // console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//auth/coin_exchange/
export const exchange = async () => {
    const url = `${host}auth/coin_exchange/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
        })).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

// sitecfg/suggest/
export const suggest = async (content) => {
    const url = `${host}sitecfg/suggest/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                content: content,
            })
        })).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

// sitecfg/future/
export const future_version = async () => {
    const url = `${host}sitecfg/future/`
    const headers = {"Authorization": `Bearer ${access_token}`}
    try {
        const response = await( await fetch(url, {headers:headers})).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//sitecfg/share/
export const get_share = async () => {
    const url = `${host}sitecfg/share/`
    const headers = {"Authorization": `Bearer ${access_token}`}
    try {
        const response = await( await fetch(url, {headers:headers})).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//prompts/prompts/
export const get_prompts = async () => {
    const url = `${host}prompts/prompts/`
    try {
        const response = await( await fetch(url)).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

export const get_all_prompts = async () => {
    const url = `${host}prompts/allprompts/`
    try {
        const response = await( await fetch(url)).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//prompts/user_bots/
export const get_user_bots = async () => {
    const url = `${host}prompts/user_bots/`
    const headers = {"Authorization": `Bearer ${access_token}`}
    try {
        const response = await( await fetch(url, {headers:headers})).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//prompts/get_bot_prompt/
export const get_bot_prompt = async (botUid) => {
    const url = `${host}prompts/get_bot_prompt/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                bot_uid: botUid,
            })
        })).json()
        console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//prompts/sendmsg/
export const sendmsg = async (botUid, msg) => {
    const url = `${host}prompts/sendmsg/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                bot_uid: botUid,
                msg: msg,
            })
        })).json()
        // console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}


//prompts/user_history/
export const user_history = async (botUid) => {
    const url = `${host}prompts/user_history/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                bot_uid: botUid,
            })
        })).json()
        // console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

//prompts/get_bot_suggets/
export const get_bot_suggets = async (botUid) => {
    const url = `${host}prompts/get_bot_suggets/`
    const headers = {"Authorization": `Bearer ${access_token}`, "Content-Type": "application/json"}
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                bot_uid: botUid,
            })
        })).json()
        // console.log(response)
        if (response.code === 200) {
            console.log(response)
            return response
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}