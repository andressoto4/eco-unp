import React from 'react';
import '../styles/Modal.css';
interface CustomModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    children: React.ReactNode;
}
declare const CustomModal: React.FC<CustomModalProps>;
export default CustomModal;
//# sourceMappingURL=Modal.d.ts.map