export default function ({ store, redirect, $cookiz}) {
  if ($cookiz.get('isAuth')) {
    return redirect('/order')
  }
}
