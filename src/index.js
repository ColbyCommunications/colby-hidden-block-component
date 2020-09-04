/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-access-state-in-setstate */
import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';
import style from './style.css';

export default class ColbyHiddenBlock extends React.Component {
    static propTypes = {
        /** Title of the link */
        title: PropTypes.node,

        /** Comment/text shown after link is clicked. */
        comment: PropTypes.node,

        /** Show the hidden block or not. <br> This prop depends on the handleClick prop: <br> If handleClick is null then it will be the default value. <br> If handleClick is a function then it will be the actual value. */
        show: PropTypes.bool,

        /** Callback function that runs when clicking the link. */
        handleClick: PropTypes.func,

        // eslint-disable-next-line react/require-default-props
        children: PropTypes.node,
    };

    static defaultProps = {
        title: 'Hidden block',
        comment: null,
        show: false,
        handleClick: null,
    };

    constructor(props) {
        super(props);
        this.link = React.createRef();

        this.state = {
            show: this.props.show,
        };
    }

    clicked = e => {
        e.preventDefault();
        $(this.link).blur();

        if (this.props.handleClick) {
            this.props.handleClick(!this.props.show);
        } else {
            this.setState({
                show: !this.state.show,
            });
        }
    };

    isShow = () => {
        if (this.props.handleClick) {
            return this.props.show;
        }

        return this.state.show;
    };

    render() {
        let body = null;
        if (this.isShow()) {
            body = <div className={style.body_wrapper}>{this.props.children}</div>;
        }

        let arrow = (
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-caret-right-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: '-4px' }}
            >
                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
        );

        if (this.isShow()) {
            arrow = (
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-caret-down-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginTop: '-4px' }}
                >
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            );
        }

        return (
            <div>
                <span className={style.arrow_wrapper}>{arrow}</span>
                <a
                    href="#"
                    onClick={this.clicked}
                    className={`${style.link}`}
                    ref={element => (this.link = element)}
                    type="button"
                >
                    {this.props.title}
                </a>
                {this.props.comment}
                {body}
            </div>
        );
    }
}
