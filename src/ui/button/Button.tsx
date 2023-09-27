import React, { FC } from 'react';

interface ButtonProps {
    btnText: string,
    className?: string,
    preIcon?: any,
    postIcon?: any
}

const Button: FC<ButtonProps> = ({btnText, className, preIcon, postIcon}) => {
    return (
        <button className={className}>
            <div className="preIcon">
                {
                    preIcon && (
                        <img src={preIcon} alt="Pre button icon"/>
                    )
                }
            </div>
            <div className="btnText">{btnText}</div>
            <div className="postIcon">
                {
                    postIcon && (
                        <img src={postIcon} alt="Post button icon"/>
                    )
                }
            </div>
        </button>
    );
};

export default Button;
