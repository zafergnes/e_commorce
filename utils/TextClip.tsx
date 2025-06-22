const textClip = (text:string) => {
  if(text.length<13) return text
  return text.substring(0,13) + "..."
}
export default textClip