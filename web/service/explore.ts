import { del, get, patch, post } from './base'

export const fetchAppList = () => {
  return get('/explore/apps')
}

// 静态页面 Apps 配置
export const fetchAppListStatic = () => {
  const jsonString = '{"recommended_apps":[{"app":{"id":"461a4302-2c50-4288-8865-0ad505d5ca2e","name":"\\u4ea7\\u54c1\\u63a8\\u5e7f","mode":"chat","icon":"\\ud83e\\udd16","icon_background":"#FFEAD5"},"app_id":"461a4302-2c50-4288-8865-0ad505d5ca2e","description":"\\u4e00\\u4e2a\\u6a21\\u62df\\u7684\\u524d\\u7aef\\u9762\\u8bd5\\u5b98\\uff0c\\u901a\\u8fc7\\u63d0\\u95ee\\u7684\\u65b9\\u5f0f\\u5bf9\\u524d\\u7aef\\u5f00\\u53d1\\u7684\\u6280\\u80fd\\u6c34\\u5e73\\u8fdb\\u884c\\u68c0\\u9a8c\\u3002","copyright":null,"privacy_policy":null,"category":"HR","position":0,"is_listed":true,"install_count":1,"installed":false,"editable":true}],"categories":["HR","Assistant","Translate","Writing","Programming"]}'
  const jsonObject = JSON.parse(jsonString)
  return jsonObject
}

export const fetchAppDetail = (id: string): Promise<any> => {
  return get(`/explore/apps/${id}`)
}

export const fetchInstalledAppList = () => {
  return get('/installed-apps')
}

export const installApp = (id: string) => {
  return post('/installed-apps', {
    body: {
      app_id: id,
    },
  })
}

export const uninstallApp = (id: string) => {
  return del(`/installed-apps/${id}`)
}

export const updatePinStatus = (id: string, isPinned: boolean) => {
  return patch(`/installed-apps/${id}`, {
    body: {
      is_pinned: isPinned,
    },
  })
}
