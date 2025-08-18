import { FC, ReactNode, useRef } from 'react';
import './Modal.css';
import CloseIcon from '../../assets/modal/close-circle.svg'
import useClickOutside from '../../hooks/useClickOutside';


interface ModalProps {
    openModal: boolean;
    onClose: () => void;
    children: ReactNode;
    styles?: React.CSSProperties;
}

const Modal: FC<ModalProps> = ({ openModal, onClose, children, styles}) => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    useClickOutside(modalRef, onClose)
    if (!openModal) {
        return null;
    }

    return (
        <div className="modal-overlay" >
            <div className="modal" style={styles}  ref={modalRef}>
                <button onClick={onClose} className="close-button">
                    <CloseIcon/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
