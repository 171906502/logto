import en from './en';

const translation = {
  input: {
    username: '用户名',
    password: '密码',
    email: '邮箱',
    phone_number: '手机号',
    confirm_password: '确认密码',
  },
  secondary: {
    sign_in_with: '通过 {{methods, list(type: disjunction;), zhOrSpaces}} 登录',
    social_bind_with:
      '绑定到已有账户? 使用 {{methods, list(type: disjunction;), zhOrSpaces}} 登录并绑定。',
  },
  action: {
    sign_in: '登录',
    continue: '继续',
    create_account: '创建账号',
    create: '创建',
    enter_passcode: '输入验证码',
    cancel: '取消',
    confirm: '确认',
    bind: '绑定到 {{address}}',
    back: '返回',
    nav_back: '返回',
    agree: '同意',
    got_it: '知道了',
    sign_in_with: '通过 {{name}} 登录',
  },
  description: {
    email: '邮箱',
    phone: '手机',
    phone_number: '手机',
    reminder: '提示',
    not_found: '404 页面不存在',
    agree_with_terms: '我已阅读并同意 ',
    agree_with_terms_modal: 'Please read the {{terms}} and then agree the box first.',
    terms_of_use: '使用条款',
    create_account: '创建账号',
    forgot_password: '忘记密码？',
    or: '或',
    enter_passcode: '验证码已经发送至您的{{ address }}',
    passcode_sent: '验证码已经发送',
    resend_after_seconds: '在 {{ seconds }} 秒后重发',
    resend_passcode: '重发验证码',
    continue_with: '通过以下方式继续',
    create_account_id_exists: '{{type}}为 {{ value }} 的账号已存在，您要登录吗？',
    sign_in_id_does_not_exists: '{{type}}为 {{ value }} 的账号不存在，您要创建一个新账号吗？',
    bind_account_title: '绑定 Logto 账号',
    social_create_account: 'No account? You can create a new account and bind.',
    social_bind_account: 'Already have an account? Sign in to bind it with your social identity.',
    social_bind_with_existing: 'We find a related account, you can bind it directly.',
  },
  error: {
    username_password_mismatch: '用户名和密码不匹配。',
    username_required: '用户名必填',
    password_required: '密码必填',
    username_exists: '用户名已存在。',
    username_should_not_start_with_number: '用户名不能以数字开头。',
    username_valid_charset: '用户名只能包含英文字母、数字或下划线。',
    invalid_email: '无效的邮箱。',
    invalid_phone: '无效的手机号。',
    password_min_length: '密码最少需要{{min}}个字符。',
    passwords_do_not_match: '密码不匹配。',
    agree_terms_required: '你需要同意使用条款以继续。',
    invalid_passcode: '无效的验证码。',
    invalid_connector_auth: '登录失败。',
    invalid_connector_request: '无效的登录请求。',
    unknown: '未知错误，请稍后重试。',
    invalid_session: '未找到有效的会话，请重新登录。',
  },
};

const zhCN: typeof en = Object.freeze({
  translation,
});

export default zhCN;