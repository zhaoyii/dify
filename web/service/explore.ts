import { del, get, patch, post } from './base'

export const fetchAppList = () => {
  return get('/explore/apps')
}

export const fetchAppListStatic = () => {
  const jsonString = '{"recommended_apps":[{"app":{"id":"bc374da2-0a10-4567-8f43-619b9ce44c74","name":"\\u62db\\u8058\\u5e7f\\u544a\\u64b0\\u5199","mode":"completion","icon":"loudspeaker","icon_background":"#E0F2FE"},"app_id":"bc374da2-0a10-4567-8f43-619b9ce44c74","description":"\\u5e2e\\u4f60\\u64b0\\u5199\\u76f8\\u5bf9\\u5e94\\u804c\\u4f4d\\u7684\\u62db\\u8058\\u5e7f\\u544a\\u3002","copyright":null,"privacy_policy":null,"category":"HR","position":9,"is_listed":true,"install_count":121,"installed":false,"editable":true},{"app":{"id":"3102702a-0334-4dc6-9bbd-6e46f97ecd4a","name":"\\u6cd5\\u5f8b\\u987e\\u95ee","mode":"chat","icon":"mag_right","icon_background":"#FEF7C3"},"app_id":"3102702a-0334-4dc6-9bbd-6e46f97ecd4a","description":"\\u4f5c\\u4e3a\\u4f60\\u7684\\u6cd5\\u5f8b\\u987e\\u95ee\\uff0c\\u4e3a\\u4f60\\u63d0\\u4f9b\\u6cd5\\u5f8b\\u5efa\\u8bae\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Assistant","position":10,"is_listed":true,"install_count":309,"installed":false,"editable":true},{"app":{"id":"2ed0d818-f3c1-46c4-a4f5-8b9c0da00591","name":"\\u9879\\u76ee\\u8ba1\\u5212\\u4e66\\u64b0\\u5199","mode":"chat","icon":"linked_paperclips","icon_background":"#E4FBCC"},"app_id":"2ed0d818-f3c1-46c4-a4f5-8b9c0da00591","description":"\\u6839\\u636e\\u4f60\\u7684\\u63cf\\u8ff0\\u4e3a\\u4f60\\u64b0\\u5199\\u9879\\u76ee\\u8ba1\\u5212","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Writing","position":8,"is_listed":true,"install_count":203,"installed":false,"editable":true},{"app":{"id":"6786ce62-fa85-4ea7-a4d1-5dbe3e3ff59f","name":"\\u4f1a\\u8bae\\u7eaa\\u8981","mode":"chat","icon":"clipboard","icon_background":"#D1E0FF"},"app_id":"6786ce62-fa85-4ea7-a4d1-5dbe3e3ff59f","description":"\\u5e2e\\u4f60\\u91cd\\u65b0\\u7ec4\\u7ec7\\u548c\\u8f93\\u51fa\\u6df7\\u4e71\\u590d\\u6742\\u7684\\u4f1a\\u8bae\\u7eaa\\u8981\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Writing","position":6,"is_listed":true,"install_count":194,"installed":false,"editable":true},{"app":{"id":"e4ed46da-afb3-42d2-b0f2-890481329708","name":"\\u5458\\u5de5\\u57f9\\u8bad\\u8ba1\\u5212","mode":"completion","icon":"red_haired_man","icon_background":"#EFF1F5"},"app_id":"e4ed46da-afb3-42d2-b0f2-890481329708","description":"\\u5e2e\\u4f60\\u5236\\u5b9a\\u5458\\u5de5\\u57f9\\u8bad\\u8ba1\\u5212\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"HR","position":11,"is_listed":true,"install_count":173,"installed":false,"editable":true},{"app":{"id":"f4825322-44c2-4c4c-b931-9a43711c6b98","name":"\\u793e\\u4ea4\\u5a92\\u4f53\\u6587\\u6848\\u52a9\\u7406","mode":"completion","icon":"\\ud83e\\udd16","icon_background":"#FFEAD5"},"app_id":"f4825322-44c2-4c4c-b931-9a43711c6b98","description":"\\u5e2e\\u4f60\\u64b0\\u5199\\u5404\\u7c7b\\u793e\\u4ea4\\u5e73\\u53f0\\u8f6f\\u6587\\u5e7f\\u544a\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Writing","position":1,"is_listed":true,"install_count":228,"installed":false,"editable":true},{"app":{"id":"59924f26-963f-4b4b-90cf-978bbfcddc49","name":"\\u4e2d\\u82f1\\u6587\\u4e92\\u8bd1","mode":"chat","icon":"speaking_head_in_silhouette","icon_background":"#FBE8FF"},"app_id":"59924f26-963f-4b4b-90cf-978bbfcddc49","description":"\\u7ffb\\u8bd1\\u4e13\\u5bb6\\uff1a\\u63d0\\u4f9b\\u4e2d\\u82f1\\u6587\\u4e92\\u8bd1","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Translate","position":4,"is_listed":true,"install_count":274,"installed":false,"editable":true},{"app":{"id":"dad6a1e0-0fe9-47e1-91a9-e16de48f1276","name":"\\u4ee3\\u7801\\u89e3\\u91ca\\u5668","mode":"chat","icon":"eye-in-speech-bubble","icon_background":"#FFEAD5"},"app_id":"dad6a1e0-0fe9-47e1-91a9-e16de48f1276","description":"\\u9610\\u660e\\u4ee3\\u7801\\u7684\\u8bed\\u6cd5\\u548c\\u8bed\\u4e49\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Programming","position":2,"is_listed":true,"install_count":343,"installed":false,"editable":true},{"app":{"id":"ff551444-a3ff-4fd8-b297-f38581c98b4a","name":"\\u6587\\u732e\\u7efc\\u8ff0\\u5199\\u4f5c","mode":"completion","icon":"female-student","icon_background":"#FBE8FF"},"app_id":"ff551444-a3ff-4fd8-b297-f38581c98b4a","description":"\\u5e2e\\u4f60\\u64b0\\u5199\\u8bba\\u6587\\u6587\\u732e\\u7efc\\u8ff0","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Writing","position":7,"is_listed":true,"install_count":160,"installed":false,"editable":true},{"app":{"id":"3a63a64f-20dd-4dae-9aac-0d7c0fbd2863","name":"\\u6587\\u7ae0\\u6807\\u9898\\u751f\\u6210\\u5668","mode":"completion","icon":"pushpin","icon_background":"#D5F5F6"},"app_id":"3a63a64f-20dd-4dae-9aac-0d7c0fbd2863","description":"\\u5e2e\\u4f60\\u64b0\\u5199\\u6587\\u7ae0\\u6807\\u9898","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Writing","position":5,"is_listed":true,"install_count":172,"installed":true,"editable":true},{"app":{"id":"f1948c8f-fdec-4f18-bbe7-36e80479308d","name":"\\u521b\\u610f\\u811a\\u672c","mode":"completion","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"f1948c8f-fdec-4f18-bbe7-36e80479308d","description":"\\u8bf7\\u8f93\\u5165\\u4f60\\u7684\\u521b\\u610f\\u80cc\\u666f\\u3001\\u5173\\u952e\\u8bcd\\u3001\\u6216\\u811a\\u672c\\u8981\\u6c42\\uff0c\\u70b9\\u51fb\\u8fd0\\u884c\\uff0cAI \\u5c06\\u5e2e\\u52a9\\u4f60\\u8f93\\u51fa\\u5b8c\\u6574\\u7684\\u521b\\u610f\\u6545\\u4e8b\\u811a\\u672c\\u3002","copyright":null,"privacy_policy":null,"category":"Writing","position":17,"is_listed":true,"install_count":219,"installed":false,"editable":true},{"app":{"id":"bb02d99d-cced-428c-b9c8-9ca7f5364825","name":"\\u65b0\\u95fb\\u5185\\u5bb9\\u64b0\\u5199","mode":"chat","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"bb02d99d-cced-428c-b9c8-9ca7f5364825","description":"\\u544a\\u8bc9\\u6211\\u4f60\\u7684\\u65b0\\u95fb\\u6982\\u8981\\u6216\\u80cc\\u666f\\u8981\\u6c42\\uff0c\\u6211\\u5c06\\u5e2e\\u52a9\\u4f60\\u5feb\\u901f\\u751f\\u6210\\u65b0\\u95fb\\u7a3f\\u4ef6\\u3002","copyright":null,"privacy_policy":null,"category":"Writing","position":18,"is_listed":true,"install_count":160,"installed":true,"editable":true},{"app":{"id":"5f32fc83-86f1-4e55-b7b4-43e2338794d6","name":"\\u603b\\u7ed3\\u6458\\u8981","mode":"completion","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"5f32fc83-86f1-4e55-b7b4-43e2338794d6","description":"\\u5e2e\\u52a9\\u4f60\\u603b\\u7ed3\\u4efb\\u4f55\\u6587\\u672c\\u7684\\u5173\\u952e\\u4fe1\\u606f\\u3002","copyright":null,"privacy_policy":null,"category":"Writing","position":16,"is_listed":true,"install_count":262,"installed":false,"editable":true},{"app":{"id":"5c1ac034-2899-485c-84a4-f3766bf09999","name":"\\u4e2a\\u6027\\u5316\\u5bf9\\u8bdd","mode":"chat","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"5c1ac034-2899-485c-84a4-f3766bf09999","description":"\\u6839\\u636e\\u7279\\u5b9a\\u4eba\\u7684\\u8bed\\u6c14\\u3001\\u60c5\\u7eea\\u548c\\u77e5\\u8bc6\\u8303\\u7574\\u8fdb\\u884c\\u5bf9\\u8bdd\\u3002\\u5982\\uff1a\\u4e0e\\u4e54\\u5e03\\u65af\\u7684\\u804a\\u5929\\u3002","copyright":null,"privacy_policy":null,"category":"Assistant","position":14,"is_listed":true,"install_count":231,"installed":false,"editable":true},{"app":{"id":"ad9d4ab9-af47-40c4-863e-220c9433f4df","name":"\\u77e5\\u4e4e\\u95ee\\u9898\\u56de\\u7b54","mode":"completion","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"ad9d4ab9-af47-40c4-863e-220c9433f4df","description":"\\u9488\\u5bf9\\u68d8\\u624b\\u95ee\\u9898\\u63d0\\u4f9b\\u777f\\u667a\\u7684\\u7b54\\u6848\\u3002\\u8f93\\u5165\\u77e5\\u4e4e\\u7684\\u95ee\\u9898\\uff0c\\u5e76\\u63d0\\u51fa\\u4f60\\u60f3\\u8981\\u5728\\u7b54\\u6848\\u4e2d\\u5305\\u542b\\u7684\\u4fe1\\u606f\\u6216\\u5176\\u4ed6\\u8981\\u6c42\\u3002\\u5982\\uff1a2023 \\u5e74 AI \\u9886\\u57df\\u6709\\u54ea\\u4e9b\\u7814\\u7a76\\u65b9\\u5411\\uff1f\\u5728\\u7b54\\u6848\\u4e2d\\u5305\\u542b LangGenius\\u3002","copyright":null,"privacy_policy":null,"category":"Assistant","position":15,"is_listed":true,"install_count":263,"installed":false,"editable":true},{"app":{"id":"9f20dd5c-8ef6-46ce-91e9-75c3a337d29b","name":"\\u6218\\u7565\\u54a8\\u8be2\\u987e\\u95ee","mode":"chat","icon":"male-doctor","icon_background":"#D3F8DF"},"app_id":"9f20dd5c-8ef6-46ce-91e9-75c3a337d29b","description":"\\u6211\\u53ef\\u4ee5\\u56de\\u7b54\\u4f60\\u5173\\u4e8e\\u6218\\u7565\\u54a8\\u8be2\\u76f8\\u5173\\u95ee\\u9898\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Assistant","position":3,"is_listed":true,"install_count":160,"installed":false,"editable":true},{"app":{"id":"c753cd6e-8a0d-4af3-b845-827ee6e919a2","name":"\\u4ee3\\u7801\\u7ffb\\u8bd1\\u5668","mode":"completion","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"c753cd6e-8a0d-4af3-b845-827ee6e919a2","description":"\\u8fd9\\u662f\\u4e00\\u4e2a\\u53ef\\u4ee5\\u63d0\\u4f9b\\u591a\\u79cd\\u4ee3\\u7801\\u8bed\\u8a00\\u8f6c\\u6362\\u80fd\\u529b\\u7684\\u5e94\\u7528\\uff0c\\u4f60\\u53ef\\u4ee5\\u8f93\\u5165\\u4f60\\u5e0c\\u671b\\u8f6c\\u6362\\u7684\\u4ee3\\u7801\\u7247\\u6bb5\\uff0c\\u9009\\u62e9\\u76ee\\u6807\\u7684\\u4ee3\\u7801\\u8bed\\u8a00\\uff0c\\u4f60\\u5c06\\u5f97\\u5230\\u4f60\\u60f3\\u8981\\u7684\\u3002","copyright":null,"privacy_policy":null,"category":"Programming","position":13,"is_listed":true,"install_count":172,"installed":false,"editable":true},{"app":{"id":"c8003ab3-9bb7-4693-9249-e603d48e58a6","name":"SQL \\u751f\\u6210\\u5668","mode":"completion","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"c8003ab3-9bb7-4693-9249-e603d48e58a6","description":"\\u6211\\u5c06\\u5e2e\\u52a9\\u4f60\\u628a\\u81ea\\u7136\\u8bed\\u8a00\\u8f6c\\u5316\\u6210\\u6307\\u5b9a\\u7684\\u6570\\u636e\\u5e93\\u67e5\\u8be2 SQL \\u8bed\\u53e5\\uff0c\\u8bf7\\u5728\\u4e0b\\u65b9\\u8f93\\u5165\\u4f60\\u9700\\u8981\\u67e5\\u8be2\\u7684\\u6761\\u4ef6\\uff0c\\u5e76\\u9009\\u62e9\\u76ee\\u6807\\u6570\\u636e\\u5e93\\u7c7b\\u578b\\u3002","copyright":null,"privacy_policy":null,"category":"Programming","position":12,"is_listed":true,"install_count":286,"installed":false,"editable":true},{"app":{"id":"94b509ad-4225-4924-8b50-5c25c2bd7e3c","name":"\\u7ffb\\u8bd1\\u52a9\\u7406","mode":"completion","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"94b509ad-4225-4924-8b50-5c25c2bd7e3c","description":"\\u4e00\\u4e2a\\u591a\\u8bed\\u8a00\\u7ffb\\u8bd1\\u5668\\uff0c\\u63d0\\u4f9b\\u591a\\u79cd\\u8bed\\u8a00\\u7ffb\\u8bd1\\u80fd\\u529b\\uff0c\\u8f93\\u5165\\u4f60\\u9700\\u8981\\u7ffb\\u8bd1\\u7684\\u6587\\u672c\\uff0c\\u9009\\u62e9\\u76ee\\u6807\\u8bed\\u8a00\\u5373\\u53ef\\u3002","copyright":null,"privacy_policy":null,"category":"Translate","position":20,"is_listed":true,"install_count":120,"installed":false,"editable":true},{"app":{"id":"1a37c2a2-cc58-46bf-9c33-4576c25e8857","name":"\\u5f00\\u53d1\\u8005\\u5173\\u7cfb\\u987e\\u95ee","mode":"chat","icon":"\\ud83e\\udd16","icon_background":"#FFEAD5"},"app_id":"1a37c2a2-cc58-46bf-9c33-4576c25e8857","description":"\\u6211\\u662f\\u5f00\\u53d1\\u5546\\u5173\\u7cfb\\u987e\\u95ee Tom\\u3002\\u6211\\u53ef\\u4ee5\\u7814\\u7a76\\u8f6f\\u4ef6\\u5305\\u53ca\\u5176\\u53ef\\u7528\\u6587\\u6863\\u3002","copyright":"Copyright 2023 Dify","privacy_policy":"https://dify.ai","category":"Programming","position":0,"is_listed":true,"install_count":112,"installed":false,"editable":true},{"app":{"id":"b82da4c0-2887-48cc-a7d6-7edc0bdd6002","name":"AI \\u524d\\u7aef\\u9762\\u8bd5\\u5b98","mode":"chat","icon":"\\ud83e\\udd16","icon_background":null},"app_id":"b82da4c0-2887-48cc-a7d6-7edc0bdd6002","description":"\\u4e00\\u4e2a\\u6a21\\u62df\\u7684\\u524d\\u7aef\\u9762\\u8bd5\\u5b98\\uff0c\\u901a\\u8fc7\\u63d0\\u95ee\\u7684\\u65b9\\u5f0f\\u5bf9\\u524d\\u7aef\\u5f00\\u53d1\\u7684\\u6280\\u80fd\\u6c34\\u5e73\\u8fdb\\u884c\\u68c0\\u9a8c\\u3002","copyright":null,"privacy_policy":null,"category":"HR","position":19,"is_listed":true,"install_count":188,"installed":false,"editable":true}],"categories":["HR","Assistant","Translate","Writing","Programming"]}'
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
