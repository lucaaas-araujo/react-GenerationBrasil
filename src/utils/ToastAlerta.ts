import { toast, Bounce } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {

    const configuracoes = {
        position: 'top-right' as const,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored' as const,
        transition: Bounce,
    };

    switch (tipo) {

        case 'sucesso':
            toast.success(mensagem, configuracoes);
            break;

        case 'erro':
            toast.error(mensagem, configuracoes);
            break;

        case 'info':
        default:
            toast.info(mensagem, configuracoes);
            break;
    }
}