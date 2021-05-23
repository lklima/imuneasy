import ReactNativeAN from 'react-native-alarm-notification';

export const alert = () => {
  const alarmNotifData = {
    title: 'Temperatura Incorreta',
    message: 'Verifique o refrigerador imediatamente',
    channel: 'my_channel_id',
    small_icon: 'ic_launcher',
    sound_name: 'alert.wav',
    loop_sound: true,
    play_sound: true,
    auto_cancel: false,
  };

  ReactNativeAN.sendNotification(alarmNotifData);
};

export const stopAlert = () => {
  ReactNativeAN.stopAlarmSound();
  ReactNativeAN.removeAllFiredNotifications();
};
