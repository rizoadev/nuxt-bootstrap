<template>
  <div class="container py-4">
    <div class="flex my-4">
      <h1>Example heading <span class="badge bg-secondary">New</span></h1>
      <h2>Example heading <span class="badge bg-secondary">New</span></h2>
      <h3>Example heading <span class="badge bg-secondary">New</span></h3>
      <h4>Example heading <span class="badge bg-secondary">New</span></h4>
      <h5>Example heading <span class="badge bg-secondary">New</span></h5>
      <h6>Example heading <span class="badge bg-secondary">New</span></h6>

      <button type="button" class="btn btn-primary">
        Notifications <span class="badge bg-info">4</span>
      </button>
      <button type="button" class="btn btn-primary btn-sm position-relative">
        Inbox
        <span
          class="
            position-absolute
            top-0
            start-100
            translate-middle
            badge
            rounded-pill
            bg-danger
          "
        >
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
    <div class="flex my-4">
      <span class="badge bg-primary">Primary</span>
      <span class="badge bg-secondary">Secondary</span>
      <span class="badge bg-success">Success</span>
      <span class="badge bg-danger">Danger</span>
      <span class="badge bg-warning text-dark">Warning</span>
      <span class="badge bg-info text-dark">Info</span>
      <span class="badge bg-light text-dark">Light</span>
      <span class="badge bg-dark">Dark</span>
    </div>
    <div class="flex my-4">
      <span class="badge rounded-pill bg-primary">Primary</span>
      <span class="badge rounded-pill bg-secondary">Secondary</span>
      <span class="badge rounded-pill bg-success">Success</span>
      <span class="badge rounded-pill bg-danger">Danger</span>
      <span class="badge rounded-pill bg-warning text-dark">Warning</span>
      <span class="badge rounded-pill bg-info text-dark">Info</span>
      <span class="badge rounded-pill bg-light text-dark">Light</span>
      <span class="badge rounded-pill bg-dark">Dark</span>
    </div>

    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="button">
        <div class="d-flex justify-content-center align-self-center">
          <div class="d-flex align-self-center">
            <IconPlus height="18px" />
          </div>
          <div class="d-flex align-self-center">Button</div>
        </div>
      </button>
      <button class="btn btn-primary" type="button">Button</button>
    </div>
    <div class="flex my-4">
      <button type="button" class="btn rounded-pill btn-sm btn-primary">
        Primary
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-success">
        Success
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-danger">
        Danger
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-warning">
        Warning
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-info">
        Info
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-light">
        Light
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-dark">
        Dark
      </button>
      <button type="button" class="btn rounded-pill btn-sm btn-link">
        Link
      </button>
    </div>
    <div class="flex my-4">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
    </div>
    <div class="flex my-4">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
    <div class="flex my-4">
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>
    <div class="flex my-3">
      <a class="btn btn-primary" href="#" role="button">Link</a>
      <button class="btn btn-primary" type="submit">Button</button>
      <input class="btn btn-primary" type="button" value="Input" />
      <input class="btn btn-primary" type="submit" value="Submit" />
      <input class="btn btn-primary" type="reset" value="Reset" />
    </div>
    <div class="title">Using the mixins</div>

    <div class="flex my-4">
      <div id="accordionExample" class="accordion accordion-flush">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingTwo" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingThree" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div class="flex my-4">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal <IconCart height="18"></IconCart>
          <IconSpin height="18" class="spin"></IconSpin>
        </button>

        <!-- Modal -->
        <div
          id="exampleModal"
          class="modal fade"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlus from './icons/IconPlus.vue'
import IconCart from './icons/IconCart.vue'
import IconSpin from './icons/IconSpin.vue'
export default {
  components: {
    IconPlus,
    IconCart,
    IconSpin,
  },
}
</script>
<style>
.spin {
  animation: spin 1000ms linear infinite;
  -webkit-animation: spin 1000ms infinite linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>