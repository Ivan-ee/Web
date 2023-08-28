const buttonStyle = {backgroundColor: 'red'}

function ResetButton({count, onClick}) {
    return (
        count > 0 && (
            <div>
                <button style={buttonStyle} onClick={onClick}>Reset</button>
            </div>
        )
    )
}

export default ResetButton