// Google 로그인 / 로그아웃 / 접근 권한 확인 로직

const auth = firebase.auth();
const db   = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

// ── 로그인 ──────────────────────────────────────
function signIn() {
  auth.signInWithPopup(provider).catch(err => {
    console.error('로그인 오류:', err);
  });
}

// ── 로그아웃 ────────────────────────────────────
function signOut() {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
}

// ── 접근 권한 확인 ──────────────────────────────
async function checkAccess(email) {
  try {
    const doc = await db.collection('allowed_users').doc(email).get();
    return doc.exists;
  } catch (e) {
    console.error('권한 확인 오류:', e);
    return false;
  }
}

// ── 인증 상태 감지 (index.html 전용) ────────────
function watchAuthOnIndex() {
  auth.onAuthStateChanged(async user => {
    if (!user) return; // 로그인 전 — 대기

    const allowed = await checkAccess(user.email);
    if (allowed) {
      window.location.href = 'dashboard.html';
    } else {
      auth.signOut();
      showError(`${user.email} 계정은 접근 권한이 없습니다.\n관리자에게 문의하세요.`);
    }
  });
}

// ── 인증 상태 감지 (dashboard.html 전용) ────────
function watchAuthOnDashboard() {
  auth.onAuthStateChanged(async user => {
    if (!user) {
      window.location.href = 'index.html';
      return;
    }
    const allowed = await checkAccess(user.email);
    if (!allowed) {
      auth.signOut();
      window.location.href = 'index.html';
      return;
    }
    // 로그인 성공 — 사용자 이름 표시
    const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = user.displayName || user.email;
  });
}

// ── 오류 메시지 표시 ────────────────────────────
function showError(msg) {
  const el = document.getElementById('error-msg');
  if (el) {
    el.textContent = msg;
    el.style.display = 'block';
  }
}
