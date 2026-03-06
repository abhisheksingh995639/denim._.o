export const getMailtoLink = (to: string, subject: string = '', body: string = '') => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    const toParam = encodeURIComponent(to);
    const subjectParam = encodeURIComponent(subject);
    const bodyParam = encodeURIComponent(body);

    if (isAndroid) {
        // Open Gmail app on Android directly
        return `intent://compose/?to=${toParam}&subject=${subjectParam}&body=${bodyParam}#Intent;scheme=mailto;package=com.google.android.gm;end`;
    } else if (isIOS) {
        // Open default mail app on iOS (usually Apple Mail or Gmail if configured)
        return `mailto:${to}?subject=${subjectParam}&body=${bodyParam}`;
    } else {
        // Desktop - open Gmail web
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${toParam}&su=${subjectParam}&body=${bodyParam}`;
    }
};
