import './Button.css';

export default function GoodButton(props) {

    return (
        <div class="button-borders">
            <button class="primary-button" onClick={props.onClickAction}>
                {props.value}
            </button>
        </div>
    );
}