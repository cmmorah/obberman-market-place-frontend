<template>
  <!-- Cart Start -->
  <div class="container-fluid pt-5">
    <div class="row px-xl-5">
      <div class="col-lg-8 table-responsive mb-5">
        <table class="table table-bordered text-center mb-0">
          <thead class="bg-secondary text-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody class="align-middle">
          <tr>
            <td class="align-middle"><img src="img/product-1.jpg" alt="" style="width: 50px;"> Colorful Stylish Shirt</td>
            <td class="align-middle">$150</td>
            <td class="align-middle">
              <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-minus" >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-plus">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="img/product-2.jpg" alt="" style="width: 50px;"> Colorful Stylish Shirt</td>
            <td class="align-middle">$150</td>
            <td class="align-middle">
              <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-minus" >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-plus">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="img/product-3.jpg" alt="" style="width: 50px;"> Colorful Stylish Shirt</td>
            <td class="align-middle">$150</td>
            <td class="align-middle">
              <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-minus" >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-plus">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="img/product-4.jpg" alt="" style="width: 50px;"> Colorful Stylish Shirt</td>
            <td class="align-middle">$150</td>
            <td class="align-middle">
              <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-minus" >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-plus">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
          </tr>
          <tr>
            <td class="align-middle"><img src="img/product-5.jpg" alt="" style="width: 50px;"> Colorful Stylish Shirt</td>
            <td class="align-middle">$150</td>
            <td class="align-middle">
              <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-minus" >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary text-center" value="1">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-primary btn-plus">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="align-middle">$150</td>
            <td class="align-middle"><button class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4">
        <form class="mb-5" action="">
          <div class="input-group">
            <input type="text" class="form-control p-4" placeholder="Coupon Code">
            <div class="input-group-append">
              <button class="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <div class="card border-secondary mb-5">
          <div class="card-header bg-secondary border-0">
            <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3 pt-1">
              <h6 class="font-weight-medium">Subtotal</h6>
              <h6 class="font-weight-medium">$150</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="font-weight-medium">Shipping</h6>
              <h6 class="font-weight-medium">$10</h6>
            </div>
          </div>
          <div class="card-footer border-secondary bg-transparent">
            <div class="d-flex justify-content-between mt-2">
              <h5 class="font-weight-bold">Total</h5>
              <h5 class="font-weight-bold">$160</h5>
            </div>
            <button class="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Cart End -->
  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script>
export default {
  name: "ShoppingCart"
}
</script>

<style scoped>

</style>