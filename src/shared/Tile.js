

export default (props) =>

<div css={{
  padding: '1rem',
  flex: '1 1 ' + props.width,
}}>

  <div css={{
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',
    paddingBottom: '.5rem'
  }}>
    {props.title}
  </div>

  <div css={{
    textAlign: 'center'
  }}>
    {props.children}
  </div>


</div>
