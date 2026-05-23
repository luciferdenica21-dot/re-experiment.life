// Page navigation
const pages = document.querySelectorAll('.page');
const navPageButtons = document.querySelectorAll('[data-page]');

const homeDrawer = document.getElementById('home-drawer');
const homeDrawerBackdrop = document.getElementById('home-drawer-backdrop');
const homeDrawerPanels = document.querySelectorAll('.home-drawer-panel');
const drawerButtons = document.querySelectorAll('[data-drawer]');

let isDrawerOpen = false;
let activeDrawer = null;
let currentPageId = document.querySelector('.page.active')?.id || 'page-home';
let isRestoringHistory = false;

function setPageActive(pageId) {
    currentPageId = pageId;
    document.body.dataset.page = pageId;
    pages.forEach(page => {
        page.classList.toggle('active', page.id === pageId);
    });
}

function setHistoryState(state, mode = 'push') {
    if (isRestoringHistory) return;
    if (!state?.pageId) return;
    try {
        if (mode === 'replace') {
            window.history.replaceState(state, '', `#${state.pageId}`);
        } else {
            window.history.pushState(state, '', `#${state.pageId}`);
        }
    } catch {}
}

function setDrawerPanel(panelId) {
    homeDrawerPanels.forEach(panel => {
        panel.classList.toggle('active', panel.getAttribute('data-panel') === panelId);
    });
}

function openDrawer(panelId, { updateHistory = true } = {}) {
    if (!homeDrawer) return;
    isDrawerOpen = true;
    activeDrawer = panelId;
    document.body.classList.remove('drawer-individuals', 'drawer-organisations');
    document.body.classList.add('drawer-open', `drawer-${panelId}`);
    homeDrawer.setAttribute('aria-hidden', 'false');
    if (homeDrawerBackdrop) homeDrawerBackdrop.setAttribute('aria-hidden', 'false');
    setDrawerPanel(panelId);
    if (updateHistory && currentPageId === 'page-home') {
        setHistoryState({ pageId: 'page-home', drawerPanel: panelId }, 'replace');
    }
}

function closeDrawer({ updateHistory = true } = {}) {
    if (!homeDrawer) return;
    isDrawerOpen = false;
    activeDrawer = null;
    document.body.classList.remove('drawer-open', 'drawer-individuals', 'drawer-organisations');
    homeDrawer.setAttribute('aria-hidden', 'true');
    if (homeDrawerBackdrop) homeDrawerBackdrop.setAttribute('aria-hidden', 'true');
    homeDrawerPanels.forEach(panel => panel.classList.remove('active'));
    if (updateHistory && currentPageId === 'page-home') {
        setHistoryState({ pageId: 'page-home' }, 'replace');
    }
}

function toggleDrawer(panelId) {
    if (isDrawerOpen && activeDrawer === panelId) {
        closeDrawer();
        return;
    }
    openDrawer(panelId);
}

function showPage(pageId, { pushHistory = true } = {}) {
    const previousPageId = currentPageId;
    closeDrawer({ updateHistory: false });
    setPageActive(pageId);
    if (pushHistory && pageId && pageId !== previousPageId) {
        setHistoryState({ pageId }, 'push');
    }
    if (pageId === 'page-online-course') {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        if (nameInput) nameInput.classList.remove('input-invalid');
        if (emailInput) emailInput.classList.remove('input-invalid');
        if (onlineCourseForm) onlineCourseForm.style.display = '';
        if (onlineCourseSuccess) {
            onlineCourseSuccess.classList.remove('active');
            onlineCourseSuccess.setAttribute('aria-hidden', 'true');
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const initialPageFromHash = (window.location.hash || '').replace('#', '');
const initialPage = (initialPageFromHash && document.getElementById(initialPageFromHash)) ? initialPageFromHash : (document.querySelector('.page.active')?.id || 'page-home');
setPageActive(initialPage);
try {
    window.history.replaceState({ pageId: initialPage }, '', `#${initialPage}`);
    window.history.pushState({ pageId: initialPage, root: true }, '', `#${initialPage}`);
} catch {}

navPageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pageId = button.getAttribute('data-page');
        if (pageId) showPage(pageId);
    });
});

drawerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const panelId = button.getAttribute('data-drawer');
        if (panelId) toggleDrawer(panelId);
    });
});

if (homeDrawerBackdrop) {
    homeDrawerBackdrop.addEventListener('click', closeDrawer);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDrawerOpen) closeDrawer();
});

// Ripple on main nav buttons
document.querySelectorAll('.nav-button[data-page]').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(168, 213, 162, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Back buttons
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(btn.getAttribute('data-back'));
        const drawerTarget = btn.getAttribute('data-open-drawer');
        if (drawerTarget) openDrawer(drawerTarget);
    });
});

// Home → main page
document.querySelector('.header-left').addEventListener('click', () => showPage('page-home'));

// Contact links on detail pages
document.querySelectorAll('.contact-link-btn').forEach(btn => {
    btn.addEventListener('click', () => showPage('page-contact'));
});

window.addEventListener('popstate', (e) => {
    const state = e.state;
    const pageId = state?.pageId || 'page-home';
    isRestoringHistory = true;
    showPage(pageId, { pushHistory: false });
    if (pageId === 'page-home' && state?.drawerPanel) {
        openDrawer(state.drawerPanel, { updateHistory: false });
    } else {
        closeDrawer({ updateHistory: false });
    }
    isRestoringHistory = false;
});

const contactChatBtn = document.querySelector('#page-contact [data-contact-chat="1"]');
const contactMessageInput = document.querySelector('#page-contact .contact-message-input');

if (contactChatBtn && contactMessageInput) {
    contactChatBtn.addEventListener('click', () => {
        contactMessageInput.focus();
        contactMessageInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

const contactSendBtn = document.querySelector('#page-contact .contact-send-btn');

if (contactSendBtn && contactMessageInput) {
    contactSendBtn.addEventListener('click', () => {
        const message = (contactMessageInput.value || '').trim();
        const subject = 'Message from re-experiment.life';
        const href = `mailto:re.experiment.coach@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = href;
    });
}

const contactLegacySendBtn = document.querySelector('#page-contact .contact-content .send-button');
const contactLegacyMessageInput = document.querySelector('#page-contact .contact-content .message-area textarea');

if (contactLegacySendBtn && contactLegacyMessageInput) {
    contactLegacySendBtn.addEventListener('click', () => {
        const message = (contactLegacyMessageInput.value || '').trim();
        const subject = 'Message from re-experiment.life';
        const href = `mailto:re.experiment.coach@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = href;
    });
}

const onlineCourseStartBtn = document.getElementById('online-course-start');
const onlineCourseForm = document.getElementById('online-course-form');
const onlineCourseSuccess = document.getElementById('online-course-success');
const onlineCourseSuccessTitle = document.getElementById('online-course-success-title');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (onlineCourseStartBtn && onlineCourseForm && onlineCourseSuccess) {
    onlineCourseStartBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const nameValue = (nameInput?.value || '').trim();
        const emailValue = (emailInput?.value || '').trim();

        if (nameInput) nameInput.classList.remove('input-invalid');
        if (emailInput) emailInput.classList.remove('input-invalid');

        const nameOk = nameValue.length > 0;
        const emailOk = isValidEmail(emailValue);

        if (!nameOk && nameInput) nameInput.classList.add('input-invalid');
        if (!emailOk && emailInput) emailInput.classList.add('input-invalid');

        if (!nameOk || !emailOk) return;

        if (onlineCourseSuccessTitle) {
            onlineCourseSuccessTitle.textContent = `Congratulations, ${nameValue}! You now have 3 days access to the course.`;
        }

        onlineCourseForm.style.display = 'none';
        onlineCourseSuccess.classList.add('active');
        onlineCourseSuccess.setAttribute('aria-hidden', 'false');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);

document.querySelector('.header-right .fa-user-arrow-up').addEventListener('click', () => {
    alert('User profile functionality coming soon!');
});

document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`${link.textContent} page coming soon!`);
    });
});

document.documentElement.style.scrollBehavior = 'smooth';

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
