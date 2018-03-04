

export default function Tile(props) {

  return (

    <div css={{
      padding: '1rem',
      minWidth: '300px',
      flex: '1 1 ' + props.width,
    }}>

      <div css={{
        fontWeight: 'bold',
        fontSize: '1.25rem',
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

  )

}


