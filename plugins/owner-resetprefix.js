let handler = async(m, { conn }) => {

  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
    await m.reply('*✅ Prefijo restablecido con exito*')
}
handler.help = ['resetprefix']
handler.tags = ['owner']
handler.command = /^(resetprefix)$/i
handler.rowner = true


export default handler
