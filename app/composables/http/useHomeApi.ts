export const useHomeApi = () => {
  const getMsgListSSR = () => {
    return useAsyncData(() => $api('index/Operate/getMsgList'));
  };

  const getMsgList = (query: any) => {
    return $api('index/Operate/getMsgList', {
      method: 'get',
      query,
    });
  };

  const postMsg = (body: any) => {
    return $api('index/Operate/getMsgList', {
      method: 'post',
      body,
    });
  };

  return {
    getMsgListSSR,
    getMsgList,
    postMsg,
  };
};
