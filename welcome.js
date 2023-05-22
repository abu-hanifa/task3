import os from 'os'
export function name () {
    console.log(`привет, юзер. Вижу ты зашел с ${os.type()}`);
}