/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md78", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md5", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md6", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md7", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md15", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md19", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md20", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md21", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md22", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md23", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md24", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md26", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md27", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md29", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md30", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md31", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md33", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md35", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md37", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md38", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md40", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md41", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md42", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md43", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md45", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md47", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md48", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md49", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md50", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md51", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md52", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md53", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md54", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md55", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md56", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md57", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md58", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md59", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md60", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md61", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md62", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.0.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md25", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md28", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md32", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md34", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md36", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md39", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md44", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md46", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md65", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md66", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md67", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md68", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md75", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md76", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md77", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dad6af9c1eaff2a89ebd3f8d0c542be12b",
"_height_field_shape_8h_source.html",
"_object_stream_text_out_8h.html",
"_semaphore_8cpp.html",
"_tapered_capsule_shape_8h_source.html",
"class_a_a_box.html#ad68947562ff18e440f87d50265001647",
"class_body_creation_settings.html#ac3bf8e14319df094679f6644f6b80e48",
"class_box_shape.html#ab93fc4ffd39a648e2627478638547746",
"class_character_base_settings.html",
"class_compound_shape.html#a3f4a71f903b9b37eb61262257ca268f2",
"class_convex_hull_shape.html#a49b4086adc746e5b69c772b4607cd2ec",
"class_d_vec3.html#afb533f92f55c1e9dc3e7eece73e87dda",
"class_factory.html#aa67bdc2e09c649caf997ffbe9ce32fa5",
"class_hinge_constraint_settings.html#ada7a75c71a3f4fc0c2bf643160406971",
"class_linear_curve.html",
"class_motor_settings.html#a33d51a2bb5a231a689a1620577aed53a",
"class_object_stream_text_out.html#ae9e5c7c394023611aeb2913c1747424f",
"class_plane.html#a71ec3665a225eda8f201e30fa2ee5544",
"class_rack_and_pinion_constraint_settings.html#a90d5633a453c1921fa1f24480bba7944",
"class_s_t_l_temp_allocator.html#a3f90b804920b11315e04932909db7b76",
"class_skeletal_animation.html#ae9603ef068dbb1fde3b1dde64fe232cc",
"class_soft_body_shape.html#a034dea7c47610c270711b8c4a19f8b87",
"class_static_array.html#a9c1a2dbce480923942dbce2f3492eb3c",
"class_tracked_vehicle_controller_settings.html#ad0578129c78d52535148ac87a7e27b63",
"class_u_vec8.html#ab477a12a379656e5aeb518621b308854",
"class_vehicle_constraint.html#a52476f3cd6814c10993dacb4e3dd03cd",
"class_wheeled_vehicle_controller.html#a88aa09d54f227962f6ccfb84f764e4c3",
"md__build_2_r_e_a_d_m_e.html#autotoc_md76",
"struct_compound_shape_1_1_cast_shape_visitor.html#a290ab12059bcc67d2a199f8a57a69027",
"struct_physics_update_context_1_1_step.html#a2f4b4efc242a2e45e369bbf6cc6a9d0b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';