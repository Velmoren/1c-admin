export default function ({ store, redirect, $cookiz }) {
  if (!$cookiz.get('isAuth')) {
    return redirect('/')
  } else {
    store.dispatch('customAuth/setAuth', $cookiz.get('isAuth'))
  }
}
